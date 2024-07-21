import './Albums.css'
import {AlbumCard, IAlbumDto} from "@/entities/album";

interface AlbumListProps {
    albums: IAlbumDto[]

    handleNavigate(albumId: number): void
}

export const AlbumList = ({albums, handleNavigate}: AlbumListProps) => {
    return (
        <div className="albums">
            {albums.map(album=> (
                <AlbumCard name={album.name} id={album.id} handleNavigate={handleNavigate} key={album.id} image={album.coverArt?.image.source}/>
            ))}
        </div>
    );
};

