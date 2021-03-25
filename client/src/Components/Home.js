import React from 'react';

console.log('Hi')

export const Home = () => {
    const homeStyle = { flexBox: 'flex', color: 'black' };
    return (

        <div className='home' style={homeStyle}>

            <p>Cooking is the act of turning nature into the culture, which has enabled the advent of the
            omnivorous human diet. The cultural wisdom of processing raw ingredients
            into delicious dishes is embodied in their cuisines. Recipes thus are the cultural
            capsules that encode elaborate cooking protocols for evoking sensory satiation as well
            as providing nourishment. As we stand on the verge of an epidemic of diet-linked disorders,
            it is eminently important to investigate the culinary correlates of recipes to probe their
            association with sensory responses
            as well as consequences for nutrition and health.
         </p>
        </div>
    )
}


export default Home