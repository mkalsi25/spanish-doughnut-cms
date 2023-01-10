import {defineConfig, ConfigContext, isDev} from 'sanity'
import {deskTool, StructureBuilder} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import Preview from './components/Preview'

const structure = (S: StructureBuilder, {currentUser}: ConfigContext) => {
  const admin = currentUser?.roles.find((user: any) => user.name === 'administrator')

  if (admin) {
    return S.list()
      .title('Dashboard')
      .items([
        ...S.documentTypeListItems().filter((item: any) => {
          return !['media.tag'].includes(item.getId())
        }),
      ])
  }

  return S.list()
    .title('Dashboard')
    .items([
      ...S.documentTypeListItems().filter((item: any) => {
        return !['media.tag'].includes(item.getId())
      }),
    ])
}

const defaultDocumentNode = (S: StructureBuilder, {currentUser, schemaType}: any) => {
  const admin = currentUser?.roles.find((user: any) => user.name === 'administrator')
  if (admin) {
    if (schemaType === 'menu') {
      return S.document().views([S.view.form(), S.view.component(Preview).title('Preview')])
    }
  }
  return S.document().views([S.view.form()])
}

const devPlugins = [
  deskTool({
    structure: structure,
    defaultDocumentNode: defaultDocumentNode,
  }),

  media(),
  visionTool(),
]

const prodPlugins = [
  deskTool({
    structure: structure,
    defaultDocumentNode: defaultDocumentNode,
  }),

  media(),
]

export default defineConfig({
  name: 'default',
  title: 'Recipe#1',
  projectId: '8j0crvpg',
  dataset: 'production',
  plugins: isDev ? devPlugins : prodPlugins,
  schema: {
    types: schemaTypes,
  },
})
