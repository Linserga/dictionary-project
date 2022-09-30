
function Definition(props){

    const definition = props.meaning.definitions.map((definition, index)=>{
            if(index < 2){
                return (
                    <p key={index}>{definition.definition}</p>
                );
        }
        });
    
    return (
        <div>
        {definition}
        </div>
    );
}

export default Definition;