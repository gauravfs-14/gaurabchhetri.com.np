import type { MetadataRoute } from 'next'
import {getProjects} from './projects/utils'
import {getPosts} from './devLogs/utils'

const projects = await getProjects()
const posts = await getPosts()
const resolvedProjects = await Promise.all(projects)
const resolvedPosts = await Promise.all(posts)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gaurabchhetri.com.np',
      lastModified: new Date(),
    },
    {
      url: 'https://gaurabchhetri.com.np/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://gaurabchhetri.com.np/devLogs',
      lastModified: new Date(),
    },
    ...resolvedProjects.map((project) => ({
      url: `https://gaurabchhetri.com.np/projects/${project.slug}`,
      lastModified: new Date(),
    })),
    ...resolvedPosts.map((post) => ({
      url: `https://gaurabchhetri.com.np/devLogs/${post.slug}`,
      lastModified: new Date(),
    })),
  ]
}