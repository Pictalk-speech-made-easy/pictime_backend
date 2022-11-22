import { UnauthorizedException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/entities/user.entity";
import { JwtPayload } from "./jwt-payload.interface";
import { UsersRepository } from "./user.repository";
import * as config from 'config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository) 
        {
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: config.get('jwt.secret'),
            });

        }
    
    async validate(payload: JwtPayload): Promise<User> {
        const { username } = payload;
        const user: User = await this.usersRepository.findOne({
            username
        });
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
