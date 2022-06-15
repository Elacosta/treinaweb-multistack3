import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [petList, setPetList] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [value, setValue] = useState(''),
    [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
        .then((answer) => {
            setPetList(answer.data);
        })
    }, [])
    
    useEffect(() => {
        if (selectedPet === null) {
            cleanForm();
        }
    },[selectedPet])

    function adopt() {
        if (selectedPet !== null) {
            if (adoptionValidation()) {
                ApiService.post('/adoptions', {
                    pet_id: selectedPet.id,
                    email,
                    value
                })
                .then(() => {
                    setSelectedPet(null);
                    setMessage('Pet Adotado!');
                    cleanForm();
                })
                .catch((error: AxiosError) => {
                    setMessage(error.response?.data.message);
                })
            } else {
                setMessage('Preencha todos os campos corretamente!');
            }
        }
    }

    function adoptionValidation() {
        return email.length > 5 && value.length > 0;
    }

    function cleanForm() {
        setEmail('');
        setValue('');
    }

    return {
        petList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message, 
        setMessage,
        adopt
    };
}