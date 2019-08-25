import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';

export default () => {
    const data = useStaticQuery(graphql`
        {
            codigofacilitoJson {
                id
                data {
                    certificates {
                        title
                        score
                        code
                    }
                    courses {
                        title
                        progress
                        url
                    }
                }
            }
        }
    `);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-x-scroll">
                        <Posts
                            data={data.codigofacilitoJson.data.certificates}
                            card={Certificate}
                            title="Mis certificados online en Códigofacilito"
                        />
                    </div>
                    <div className="overflow-x-scroll">
                        <Posts
                            data={data.codigofacilitoJson.data.courses}
                            card={Course}
                            title="Mis Cursos en Códigofacilito"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};