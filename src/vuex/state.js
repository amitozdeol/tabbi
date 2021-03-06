const state = {

  meta: {
    ver:          1,
    linkIndex:    1,
    boardIndex:   2,
    lastBoard:    0,
    updatedAt:    0,
    createdAt:    Date.now(),
    syncData:     false
  },

  view: {
    links:   5,
    config:  true,
    sidebar: true,
    tab:     "boards"
  },

  boards:   [ { id: 1, name: "Inbox", links: [] } ],

  sessions: [],
  
  trash:    { 
    name: "Trash",
    links: [],
    boards: [],
    sessions: []
  },

  // local
  _: {
    mobile: false,
    filter: {
      key:   "",
      type:  "string",
      active: false
    }
  }
}

export default state