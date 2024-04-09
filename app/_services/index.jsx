import request, { gql } from "graphql-request"

const MASTER_URL ="https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList=async()=> {
    const query=gql `
    query courseList {
        lmScourseList(where: {}) {
          name
          banner {
            url
          }
          free
          id
          author 
          totalChapters
          tags
        }
      }
      
    `

    const result = await request(
        MASTER_URL, query
    )

    return result
} 