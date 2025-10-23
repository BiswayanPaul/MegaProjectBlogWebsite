import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  tables;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.tables = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tables.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId, // same as collectionId previously
        rowId: slug,
        data: { title, content, featuredImage, status, userId },
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.tables.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: { title, content, featuredImage, status, userId },
      });
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.tables.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tables.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  async getPosts(queries = [Query.equal("status", ["active"])]) {
    try {
      return await this.tables.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        queries,
      });
    } catch (error) {
      console.error("Error listing posts:", error);
      return false;
    }
  }

  // ===============================
  // File Upload Services
  // ===============================

  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: conf.appwriteBucketId,
        fileId: ID.unique(),
        file,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    // console.log("Getting file preview for:", fileId);
    try {
      const preview = this.bucket.getFileView({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      // console.log("File preview URL:", preview);
      return preview;
    } catch (error) {
      console.error("Error getting file preview:", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
