import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'person' })
export class PersonEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;
    
}