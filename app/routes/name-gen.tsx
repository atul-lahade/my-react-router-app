import React from 'react';
import { useSearchParams } from 'react-router';
import NameGenerator from '~/components/NameGenerator';

const NameGen: React.FC = () => {

    const [searchParams] = useSearchParams();

    return (
        <div>
            <NameGenerator firstName={searchParams.get('firstName') ?? ''} lastName={searchParams.get('lastName') ?? ''} />
        </div>
    );
};

export default NameGen;