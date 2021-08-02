import request from "./request";

export /**
 *
 *  获取博客列表数据
 * @param {number} [page=1]
 * @param {number} [limit=10]
 * @param {*} [categoryid=-1]
 */
const getBlogs =  async (page=1 , limit=10,categoryid=-1)=>{
     return request.get('/api/blog',{
         param:{
             page,
             limit,
             categoryid,
         }
     })
}

export /**
 *
 *  获取博客分类

 */
const getBlogTypes =  async ()=>{
     return request.get('/api/blogtype')
}