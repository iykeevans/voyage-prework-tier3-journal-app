let journals = [
  {
    id: 1,
    title: 'My first journal entry really awesome stuff',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti soluta cum quisquam doloremque natus quia, voluptatum praesentium odit architecto? Delectus, ratione. A officiis at omnis est quia mollitia maxime?',
    created_at: '20 Aug 2019',
    modified_at: '20 Aug 2019'
  },
  {
    id: 2,
    title: 'My second journal entry really awesome stuff',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti soluta cum quisquam doloremque natus quia, voluptatum praesentium odit architecto? Delectus, ratione. A officiis at omnis est quia mollitia maxime?',
    created_at: '20 Aug 2019',
    modified_at: '20 Aug 2019'
  },
  {
    id: 3,
    title: 'My third journal entry really awesome stuff',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti soluta cum quisquam doloremque natus quia, voluptatum praesentium odit architecto? Delectus, ratione. A officiis at omnis est quia mollitia maxime?',
    created_at: '20 Aug 2019',
    modified_at: '20 Aug 2019'
  },
  {
    id: 4,
    title: 'My fourth journal entry really awesome stuff',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti soluta cum quisquam doloremque natus quia, voluptatum praesentium odit architecto? Delectus, ratione. A officiis at omnis est quia mollitia maxime?',
    created_at: '20 Aug 2019',
    modified_at: '20 Aug 2019'
  },
]

export const getJournals = (id=null) => new Promise((resolve) => {
  if (!id) {
    resolve(journals);
  } else {
    const pickedJournal = journals.find((journal) => journal.id === Number(id));
    resolve(pickedJournal);
  }
});

export const createJournal = (data) => new Promise((resolve) =>{
  const allJournals = [data, ...journals];
  journals = allJournals;
  resolve(journals);
}); 
