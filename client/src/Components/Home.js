import React from 'react';
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


console.log('Hi')

export const Home = () => {
    const homeStyle = { flexBox: 'flex', color: 'black' };
    return (

        <div className='home' style={homeStyle}>

            <Card className='mb-3' style={{ color: '#000', marginBottom: '15px', margin: '100px' }}>
                <Card.Img src='https://picsum.photos/100/50'></Card.Img>
                <Card.Body></Card.Body>
                <Card.Title></Card.Title>
                <Button>Test Button</Button>
                <Alert variant="success">This is a Button</Alert>
                <Breadcrumb.Item>Test1</Breadcrumb.Item>
                <Breadcrumb.Item>Test2</Breadcrumb.Item>
                <Breadcrumb.Item>Test3</Breadcrumb.Item>
            </Card>



            <p>Cooking is the act of turning nature into the culture, which has enabled the advent of the
            omnivorous human diet. The cultural wisdom of processing raw ingredients
            into delicious dishes is embodied in their cuisines. Recipes thus are the cultural
            capsules that encode elaborate cooking protocols for evoking sensory satiation as well
            as providing nourishment. As we stand on the verge of an epidemic of diet-linked disorders,
            it is eminently important to investigate the culinary correlates of recipes to probe their
            association with sensory responses
            as well as consequences for nutrition and health.
         </p>



        </div >

    )
}


export default Home