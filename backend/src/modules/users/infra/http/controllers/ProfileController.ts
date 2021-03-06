import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';

export default class ProfileController {

  public async show(request: Request, response: Response): Promise<Response> {
    //exibicao do perfil
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id =  request.user.id;
    const { name, email, old_password, password } = request.body;

    //instanciando sevice
    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    delete user.password;

     //retornando usuario que foi criado
     return response.json(user);
  }
}
