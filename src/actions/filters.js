export const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
})
//Sort by Date
export const sortByDate = () => ({
    type:'SORTBY_DATE'
})
//Sort by amount
export const sortByAmount = () => ({
    type:'SORTBY_AMOUNT',
})

//Set Start Date
export const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
}) 
//Set end date
export const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})