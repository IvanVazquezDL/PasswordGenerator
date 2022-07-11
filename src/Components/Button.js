const configurationCharacters = {
    lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numeric: ['0','1','2','3','4','5','6','7','8','9'],
    special: ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}','}','|',':',';','"','<',',','>','.','?','/']
}

const Button = (props) => {
    function generatePassword() {
        const selectedConfigurations = getSelectedConfigurations()
        let password = '';
        let functionCounter = 0;
    
        for (let i = 0; i < props.configuration.length; i++) {
            password += getCharacter(selectedConfigurations, functionCounter)
            functionCounter = functionCounter < selectedConfigurations.length - 1 ? functionCounter + 1 : 0;
        }
    
        props.onGeneratedPassword(password)
    }

    function getCharacter(selectedConfigurations, functionCounter) {
        const characterArray = configurationCharacters[selectedConfigurations[functionCounter]];
        const character = characterArray[getRandomInt(characterArray.length)];
    
        return character;
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getSelectedConfigurations() {
        const selectedConfigurations = ['lowercase'];
        for(const [key, value] of Object.entries(props.configuration)) {
            if (value === true) selectedConfigurations.push(key)
        }
    
        return selectedConfigurations;
    }

    return(
        <button type="button" className="btn btn-outline-secondary" onClick={generatePassword}>
            {props.text}
        </button>
    );
};


export default Button;
