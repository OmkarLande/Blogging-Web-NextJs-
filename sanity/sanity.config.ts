import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {apiVersion, dataset, projectId} from './env'
import { myTheme } from './theme'


export default defineConfig({
  name: 'default',
  title: 'Blog Website',

  // projectId: 'dc4q6v20',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  basePath:'/studio',
  theme: myTheme

})
