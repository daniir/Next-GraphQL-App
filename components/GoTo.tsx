import Link from 'next/link';
import { goToProps } from '../src/graphql/data/types';


export default function GoTo({path, name}: goToProps){
    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link href={`/${path}`}>
                <a className="btn btn-primary btn-lg">
                    { name }
                </a>
            </Link>
        </div>
    );
};