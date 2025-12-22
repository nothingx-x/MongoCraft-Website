import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { ApiResponse, ISurveySubmission } from '../../../types';
import dbConnect from '@lib/mongodb';
import { Survey } from '@lib/models/Survey';




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'POST':
      return handlePost(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({
        success: false,
        message: `Method ${req.method} Not Allowed`
      });
  }
}
async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return res.status(401).json({
        success: false,
        message: 'دسترسی غیر مجاز'
      });
    }

    const surveys = await Survey.find({}).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: 'نظرسنجی‌ها با موفقیت دریافت شدند',
      data: surveys
    });
  } catch (error) {
    console.error('Error fetching surveys:', error);
    res.status(500).json({
      success: false,
      message: 'خطا در دریافت نظرسنجی‌ها',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const { name, responses, surveyToken } = req.body;

    if (!name || !responses || !Array.isArray(responses) || !surveyToken) {
      return res.status(400).json({
        success: false,
        message: 'داده‌های ارسالی نامعتبر هستند'
      });
    }

    const existingSubmission = await Survey.findOne({ surveyToken });
    if (existingSubmission) {
      return res.status(409).json({
        success: false,
        message: 'شما قبلاً این نظرسنجی را پر کرده‌اید'
      });
    }

    const surveyData: Partial<ISurveySubmission> = {
      name,
      responses,
      surveyToken,
      ipAddress: req.headers['x-forwarded-for'] as string || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    const newSurvey = new Survey(surveyData);
    await newSurvey.save();

    res.status(201).json({
      success: true,
      message: 'نظرسنجی با موفقیت ثبت شد',
      data: { id: newSurvey._id }
    });
  } catch (error: any) {
    console.error('Error saving survey:', error);
    
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'شما قبلاً این نظرسنجی را پر کرده‌اید'
      });
    }

    res.status(500).json({
      success: false,
      message: 'خطا در ثبت نظرسنجی',
      error: error.message
    });
  }
}