import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  before: string;

  @Column()
  after: string;
}