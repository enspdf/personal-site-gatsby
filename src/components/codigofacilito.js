import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
                }
            }
        }
    `);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis certificados online en Códigofacilito</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.certificates.map(certificate => (
                                <div className="shadow p-8 bg-white mr-4">
                                    <h4 className="font-bold">{certificate.title}</h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Calificación: {certificate.score}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};