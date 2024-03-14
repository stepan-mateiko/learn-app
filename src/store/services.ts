import axios from "axios";

import { LoginType, UserType, RegisterType } from "./users/types";
import { TrainingsType } from "./trainings/types";

export const baseURL = "http://localhost:3080";

export const userAPI = {
  login: async (credentials: LoginType) => {
    try {
      return axios.post(`${baseURL}/auth/login`, credentials);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
  register: async (credentials: RegisterType) => {
    try {
      return await axios.post(`${baseURL}/auth/register`, credentials);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },
  getUserInfo: async (userName: string) => {
    try {
      const result = await axios.get(`${baseURL}/api/users/${userName}`);
      return result;
    } catch (error) {
      console.error("Registration error:", error);
    }
  },
  updateUserOnServer: async (ID: string, credentials: UserType) => {
    try {
      return await axios.put(`${baseURL}/api/users/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },
  addPhotoOnServer: async (formData: FormData) => {
    try {
      await axios.post(`${baseURL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  },
  deleteUserFromTheServer: async (ID: string) => {
    try {
      return await axios.delete(`${baseURL}/api/users/${ID}`);
    } catch (error) {
      console.error("Deleting user error:", error);
      throw error;
    }
  },
};

export const studentsAPI = {
  fetchAllStudents: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/students`);
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },
  updateStudentOnServer: async (ID: string, credentials: any) => {
    try {
      return await axios.put(`${baseURL}/api/students/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  },
};

export const trainersAPI = {
  fetchAllTrainers: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/trainers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching trainers:", error);
      throw error;
    }
  },
  updateTrainerOnServer: async (ID: string, credentials: any) => {
    try {
      return await axios.put(`${baseURL}/api/trainers/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  },
};

export const trainingsAPI = {
  fetchAllTrainings: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/trainings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching trainings:", error);
      throw error;
    }
  },
  addTrainingToServer: async (credentials: TrainingsType) => {
    try {
      return await axios.post(`${baseURL}/api/trainings`, credentials);
    } catch (error) {
      console.error("Error adding training:", error);
      throw error;
    }
  },
};

export const specializationsAPI = {
  fetchAllSpecializations: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/specializations`);
      return response.data;
    } catch (error) {
      console.error("Error fetching specializations:", error);
      throw error;
    }
  },
};

export const trainingTypesAPI = {
  fetchAllTrainingTypes: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/trainingTypes`);
      return response.data;
    } catch (error) {
      console.error("Error fetching training types:", error);
      throw error;
    }
  },
};
