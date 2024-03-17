import { Entity, PrimaryGeneratedColumn, Generated, Column, Index } from "typeorm";

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  expiry: number;

  @Column("longtext")
  beforeName: string;

  @Column("longtext")
  before: string;

  @Column("longtext")
  afterName: string;

  @Column("longtext")
  after: string;

}