//BBDD

import ICreateCredentialDto from "../dtos/ICreateCredentialsDto";
import Credential from "../entities/CredentialEntity";
import ICredential from "../interfaces/ICredential";
import { credentialReposopry } from "../repositories/IndexRepository";


export const CreateCredentialService = async (createCredentialDto: ICreateCredentialDto): Promise<ICredential> => {
    //* createCredentialDto = { username: "Ariel", password: "1234" }
    const { username, password } = createCredentialDto;

const foundCredential: Credential | null = await credentialReposopry.findOneBy({username});
if(foundCredential) throw new Error("ya existe la credencial para username");



    const newCredential: Credential = credentialReposopry.create ({
        username,
        password,
    });

    await credentialReposopry.save(newCredential);

    return newCredential;
};



export const validateCredentialService = async (validateCredentialDto:ICreateCredentialDto ): 
Promise<number> => {
//*{ username: "Ariel", password: "1234" }
    const { username, password } = validateCredentialDto;
    //*1 Buscar la credencial
    const foundCredential: Credential | null = await credentialReposopry.findOneBy({username});
if(!foundCredential) throw new Error("Credenciales incorrectas");

    //*2 verificar que existe username
    if (foundCredential.password !== password)throw new Error ("Credenciales Incorrectas"); // constreña incorrecta
    return foundCredential.id;
 
}

