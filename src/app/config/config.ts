export const Config = {
    species: [
        {id: 'Human', value: 'Human', ischecked: false},
        {id: 'Mytholog', value: 'Mytholog', ischecked: false},
        {id: 'Other Species', value: 'Other Species', ischecked: false},
    ],
    gender: [
        {id: 'Male', value: 'Male', ischecked: false},
        {id: 'Female', value: 'Female', ischecked: false}
    ],
    origin: [
        {id: 'Post', value: 'Post', ischecked: false},
        {id: 'Post-Apocalyptic Earth', value: 'Post-Apocalyptic Earth', ischecked: false},
        {id: 'Nuptia 4', value: 'Nuptia 4', ischecked: false},
        {id: 'Other Origins...', value: 'Other Origins...', ischecked: false},
    ],
    apiMethods: {
        post: 'post',
        put: 'put',
        delete: 'delete',
        get: 'get',
        patch: 'patch'
      },
      apiUrls: {
        character: 'character'
      }
};
