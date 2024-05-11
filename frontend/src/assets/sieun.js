import q1indicator from '../assets/Group 1.png'
import q2indicator from '../assets/Group 79.png'
import q3indicator from '../assets/Group 30.png'
import q4indicator from '../assets/Group 4.png'
import q5indicator from '../assets/Group 5.png'
import q6indicator from '../assets/Group 6.png'
import q7indicator from '../assets/Group 7.png'
export const SieunQList = [
    {
        indicator: q1indicator,
        num: 'Q1.',
        name: 'What image do you want for your car?',
        answer: ['Free & Open', 'Spacious & Robust', 'Luxurious & Elegant', 'Sporty & Dynamic', 'Popular & Beloved', 'Distinctive & Unique', 'Practical & Versatile'],
        option: "Max 4"
    },
    {
        indicator: q2indicator,
        num: 'Q2.',
        name: 'What kind of fuel type do you prefer?',
        answer: ['Gasoline', 'Disel', 'Plug-in Hybrid', 'Electric', "Not Sure"]
        ,option: "Max 4"
    
    },
    {
        indicator: q3indicator,
        num: 'Q3.',
        name: 'How many people will ride your car?',
        answer: ['2', '3', '4', 'Not Sure']
        ,option: ""
    },
    {
        indicator: q4indicator,
        num: 'Q4.',
        name: 'What is your driving style?',
        answer: ['Sporty & Powerful', 'New Driver', 'Long Distance', 'Quiet & Smooth']
        ,option: "Max 2"
    },
    {
        indicator: q5indicator,
        num: 'Q5.',
        name: 'What is the main purpose of using the vehicle?',
        answer: ['Daily commuting in the city', 'Business meetings or official events', 'Outdoor activities like off-road / camping', 'Traveling with family or friends']
        ,option: "Max 2"
    },{
        indicator: q6indicator,
        num: 'Q6.',
        name: 'What do you value most?',
        answer: ['Fuel Efficiency', 'Performance', 'Space', 'Popularity','Design']
        ,option: "Rank these keywords from 1 to 5"
    }
]