import { Project } from './project';
export class ProjectImp implements Project {
    constructor(public name: string, public content: string){
    }
}
