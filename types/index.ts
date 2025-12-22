export interface ISurveyResponse {
  question: string;
  options: string[];
  pickedOption?: number;
}

export interface ISurveySubmission {
  name: string;
  responses: ISurveyResponse[];
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  surveyToken: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}