"use server"
import mongoose from "mongoose";
 
let isConnected: boolean = false;
export const connectToDatabase = async () => {
    if (!process.env.MONGO_DB) {
        console.warn("MONGO_DB chưa được cài đặt"); // Cảnh báo thay vì ném lỗi
        return;
    }
    if(isConnected) {
        console.log("Mongodb is connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            dbName: "alearn", 
        });
        isConnected = true;
        console.log("Using new MongoDB connection");
        
    } catch (error) {
        console.log("Error connecting to MongoDB"); 
    }
}