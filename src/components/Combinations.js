const Combinations = (props) => {
    return <div className="Combinations__Wrapper">
        <div className="Combinations">
        {props.recipeNameList.map(names => {
            return (
                <div className="Recipe_Name">
                    <p>{names}</p>
                </div>
            )
        })}
        </div>
    </div>;
};

export default Combinations;