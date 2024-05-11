import { Injectable } from '@nestjs/common';
 
import { CLOUDINARY } from './cloudinary';
import { CLOUDINARY as v2  , UploadApiResponse} from 'cloudinary';
@Injectable()
export class UserFileUploadService {
    // ! this is cloudniary service 
    constructor(){
        v2
        
    }
}
