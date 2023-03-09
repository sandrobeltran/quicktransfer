import { DocumentData } from "firebase/firestore";

// Firebase Date
export interface FirebaseDate {
  second: number;
  miliseconds: number;
}

// Next API
export interface ApiResponse {
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  data?: {}[] | {};
}

// Texts
export interface ShareText {
  content: string;
  timeLimit: string;
  public: boolean;
}
export interface SharedText {
  id: string;
  content: string;
  timeLimit: FirebaseDate;
  createdAt: FirebaseDate;
  public: boolean;
}

// Images
export interface ShareImage {
  image: File | null;
  timeLimit: string;
  public: boolean;
}
export interface SharedImage {
  id: string;
  image: string;
  name: string;
  timeLimit: FirebaseDate;
  createdAt: FirebaseDate;
  public: boolean;
}

// Files
export interface ShareFile {
  file: File | null;
  timeLimit: string;
  public: boolean;
}
export interface SharedFile {
  id: string;
  file: string;
  name: string;
  timeLimit: FirebaseDate;
  createdAt: FirebaseDate;
  public: boolean;
}
