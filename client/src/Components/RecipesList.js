import RecipesDetails from "./RecipesDetails"
import { RecipesContext } from './RecipesContext'

const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
const RecipesList = () => {
    const { albums } = useContext(RecipesContext)

    console.log('recipes', recipes)

    return (
        <div>
            <div style={container}>
                <h1>Recipes</h1>
                {recipes && recipes.map(recipe => {
                    return (
                        <RecipesDetails key={recipe.id} recipe={recipe} />
                    )
                })}
            </div>
        </div>
    )
}

export default RecipesList