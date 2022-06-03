/* eslint-disable react/jsx-key */
import { ListStyle, ListItem, Photo, Information, Name, Description} from "./listStyle";
import { Button } from "@mui/material";
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/textServices';

interface ListProps{
    pets: Pet[];
}

export default function PetList(props: ListProps) {

    const maxLengthText = 200;
    return (
        <ListStyle>
            {props.pets.map(pet => (
                <ListItem>
                    <Photo src={pet.photo} alt={pet.name}/>
                    <Information>
                        <Name>
                            {pet.name}
                        </Name>
                        <Description>
                            {TextService.textLimit(pet.history, maxLengthText)}
                        </Description>
                        <Button
                        variant="contained"
                        fullWidth
                        >Adotar {pet.name}
                        </Button>
                    </Information>
                </ListItem>
            ))}
        </ListStyle>
    )
}