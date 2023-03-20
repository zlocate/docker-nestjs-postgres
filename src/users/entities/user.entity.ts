import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsInt()
  public id: number;

  @ApiProperty({
    format: 'email',
    examples: ['some@ya.ru', 'another@ya.ru', 'third@ya.ru'],
  })
  @Column()
  public email: string;

  @ApiProperty({ example: 'petya' })
  @Column()
  public username: string;

  @ApiProperty({ example: 'Кое-что обо мне' })
  @Column({ nullable: true })
  public bio?: string | null;

  @ApiProperty({ format: 'uri', example: 'https://ya.ru/1.jpg' })
  @Column({ nullable: true })
  public image?: string | null;
}
