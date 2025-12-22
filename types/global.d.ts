import mongoosedb from 'mongoose';


declare global {
  
  let mongoose: {
    conn: typeof mongoosedb | null;
    promise: Promise<typeof mongoosedb> | null;
  } | undefined;
}

export {}; // این فایل باید ماژول باشد