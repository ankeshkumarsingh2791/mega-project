import { Client, Databases, ID, Storage, Query } from "appwrite"
import conf from "../conf/conf"

export class Service{
    client = new Client();
    Databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf. appwriteurl)
        .setProject(conf. appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, feauredImage, status, userId}){
try {
    return await this.databases.createDocument(
        conf. appwriteDatabaseId,
        conf.appwriteCollectinId,
        slug,{
            title,
            content,
            feauredImage,
            userId
        }
    ) 
} catch (error) {
    throw error;
}
    }

    async updatePost( slug, {title, content, status, feauredImage}){
        try {
         return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectinId,
            slug,{
                title,
                content,
                feauredImage,
                status
            }
         )    
        } catch (error) {
           throw error 
        }
    }

    async deletPost (slug){
        try {
           await this. databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectinId,
            slug
           ) 
           return true;
        } catch (error) {
           console.log("Appwrite service :: deletPost :: error", error) 
           return false
        }
    }

    async getPost(slug){
        try {8
           return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectinId,
            slug
           )  
        } catch (error) {
            throw error
        }
    }

    async getallPost(queries = [Query.equal("status","active")]){
        try {
         return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectinId,
            queries,
         )   
        } catch (error) {
           throw error;
           return false 
        }
    }

    async uploadFile(file){
        try {
         return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
         )
            
        } catch (error) {
           throw error
           return false; 
        }
    }

    async deleteFile(fileID){
        try {
           await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileID
           )  
           return true;  
        } catch (error) {
           throw error
           return false
        }
    }
     getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
     }

}



const service = new Service()
export default service