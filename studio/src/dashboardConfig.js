export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea7fa792d64dee4f63b88ac',
                  title: 'Sanity Studio',
                  name: 'sanity2de-poging-studio',
                  apiId: '2e0fdf35-b8ad-4cd9-aff5-6db73791b6ba'
                },
                {
                  buildHookId: '5ea7fa79be844ee01d507a62',
                  title: 'Blog Website',
                  name: 'sanity2de-poging',
                  apiId: 'e1e9f88f-8e83-494f-b6bf-4842c0a77ebc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TuurdeMuur/sanity2de-poging',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity2de-poging.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
