import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import RadioBox from "@/Components/RadioBox";
import Select from "@/Components/Select";
import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function FormEntry(props) {
    const { data, setData, post, processing, errors, reset, transform } =
        useForm({
            nome: "",
            apelido: "",
            data_nascimento: "",
            email: "",
            celular: "",
            cep: "",
            endereco: "",
            bairro: "",
            cidade: "",
            estado: "",
            pais: "",
            genero: "",
            cpf: "",
            profissao: "",
            escolaridade: "",
        });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    transform((data) => ({
        type: "form-entry",
        fields: data,
    }));

    const submit = (e) => {
        e.preventDefault();

        post(route("form"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Formulário de entrada
                </h2>
            }
        >
            <Head title="Formulário de entrada" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-96 m-auto bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />

                            <form onSubmit={submit}>
                                <div className="mt-4">
                                    <Label forInput="nome" value="Nome" />

                                    <Input
                                        type="text"
                                        name="nome"
                                        value={data.nome}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="apelido" value="Apelido" />

                                    <Input
                                        type="text"
                                        name="apelido"
                                        value={data.apelido}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="data_nascimento"
                                        value="Data de nascimento"
                                    />

                                    <Input
                                        type="date"
                                        name="data_nascimento"
                                        value={data.data_nascimento}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="email" value="E-mail" />

                                    <Input
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="celular"
                                        value="Celular/Whatsapp"
                                    />

                                    <Input
                                        type="text"
                                        name="celular"
                                        value={data.celular}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="cep" value="CEP" />

                                    <Input
                                        type="text"
                                        name="cep"
                                        value={data.cep}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="endereco"
                                        value="Endereço"
                                    />

                                    <Input
                                        type="text"
                                        name="endereco"
                                        value={data.endereco}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="bairro" value="Bairro" />

                                    <Input
                                        type="text"
                                        name="bairro"
                                        value={data.bairro}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="cidade" value="Cidade" />

                                    <Select
                                        name="cidade"
                                        value={data.cidade}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    >
                                        <option value="">
                                            Selecione uma cidade
                                        </option>
                                        <option>Porto Alegre</option>
                                        <option>Viamão</option>
                                    </Select>
                                </div>

                                <div className="mt-4">
                                    <Label forInput="estado" value="Estado" />

                                    <Select
                                        name="estado"
                                        value={data.estado}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    >
                                        <option value="">
                                            Selecione um estado
                                        </option>
                                        <option value="RS">RS</option>
                                        <option value="SP">SP</option>
                                    </Select>
                                </div>

                                <div className="mt-4">
                                    <Label forInput="pais" value="País" />

                                    <Input
                                        type="text"
                                        name="pais"
                                        value={data.pais}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="block mt-4">
                                    <Label value="Gênero" />

                                    <div className="grid grid-cols-3 gap-4">
                                        <label>
                                            <RadioBox
                                                name="genero"
                                                value="masculino"
                                                handleChange={onHandleChange}
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Masculino
                                            </span>
                                        </label>

                                        <label>
                                            <RadioBox
                                                name="genero"
                                                value="feminino"
                                                handleChange={onHandleChange}
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Feminino
                                            </span>
                                        </label>

                                        <label>
                                            <RadioBox
                                                name="genero"
                                                value="indefinido"
                                                handleChange={onHandleChange}
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Indefinido
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Label forInput="cpf" value="CPF" />

                                    <Input
                                        type="number"
                                        step="1"
                                        name="cpf"
                                        value={data.cpf}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="profissao"
                                        value="Profissão"
                                    />

                                    <Input
                                        type="text"
                                        name="profissao"
                                        value={data.profissao}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="escolaridade"
                                        value="Escolaridade"
                                    />

                                    <Input
                                        type="text"
                                        name="escolaridade"
                                        value={data.escolaridade}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button
                                        className="ml-4"
                                        processing={processing}
                                    >
                                        Enviar
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
