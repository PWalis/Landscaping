import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column("longtext")
  before: string;

  @Column("longtext")
  after: string;
}