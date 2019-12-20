export const Config = {
    species: [
        {id: 'Human', value: 'Human', ischecked: false, type: 'species'},
        {id: 'Mytholog', value: 'Mytholog', ischecked: false, type: 'species'},
        {id: 'Other Species', value: 'Other Species', ischecked: false, type: 'species'},
    ],
    gender: [
        {id: 'Male', value: 'Male', ischecked: false, type: 'gender'},
        {id: 'Female', value: 'Female', ischecked: false, type: 'gender'}
    ],
    origin: [
        {id: 'Post', value: 'Post', ischecked: false},
        {id: 'Post-Apocalyptic Earth', value: 'Post-Apocalyptic Earth', ischecked: false, type: 'origin'},
        {id: 'Nuptia 4', value: 'Nuptia 4', ischecked: false, type: 'origin'},
        {id: 'Other Origins...', value: 'Other Origins...', ischecked: false, type: 'origin'},
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
