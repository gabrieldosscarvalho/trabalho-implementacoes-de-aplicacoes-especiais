import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Olá {props.auth.user.name}!
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-12">
                        <Link href={route("form-entry")}>
                            <span className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <span className="h-48 flex justify-center items-center p-6 bg-white border-b border-gray-200">
                                    <span>Ir para o formulário de entrada</span>
                                </span>
                            </span>
                        </Link>

                        <Link href={route("form-campista")}>
                            <span className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <span className="h-48 flex justify-center items-center p-6 bg-white border-b border-gray-200">
                                    <span>
                                        Ir para o formulário do campista
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
