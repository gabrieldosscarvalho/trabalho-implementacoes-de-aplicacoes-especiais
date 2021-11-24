import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import RadioBox from "@/Components/RadioBox";
import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function FormCampista(props) {
    const { fields, status } = props;

    const { data, setData, post, processing, errors, reset, transform } =
        useForm({
            tipo_campismo: fields?.tipo_campismo ?? "",
            equipamentos: fields?.equipamentos ?? "",
            primeira_vez: fields?.primeira_vez ?? "",
            levaria_alguem: fields?.primeira_vez ?? "",
            quando_acampar: fields?.quando_acampar ?? "",
            casa_veraneio: fields?.casa_veraneio ?? "",
            destino_preferido: fields?.destino_preferido ?? "",
            atrativos_prediletos: fields?.atrativos_prediletos ?? "",
            atrativos_obrigatorios: fields?.atrativos_obrigatorios ?? "",
        });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const onHandleChange = (event) => {
        let _value = event.target.value;

        if (event.target.type === "checkbox") {
            _value = data[event.target.name];

            const _dataValue = Array.isArray(_value) ? [..._value] : [];

            _value = event.target.checked
                ? [..._dataValue, event.target.value]
                : _dataValue.filter((_v) => _v !== event.target.value);
        }

        setData(event.target.name, _value);
    };

    transform((data) => {
        const _data = { ...data };

        return {
            type: "form-campista",
            fields: _data,
        };
    });

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
                    Formulário do campista
                </h2>
            }
        >
            <Head title="Formulário do campista" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-96 m-auto bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />

                            {/* {status ? (
                                <Toast title="Sucesso!" type={status} />
                            ) : undefined} */}

                            <form onSubmit={submit}>
                                <div className="mt-6">
                                    <Label
                                        forInput="tipo_campismo"
                                        value="Tipos de campismo preferidos"
                                    />

                                    <div className="my-4 grid grid-cols-2 gap-4 mt-4">
                                        <label className="flex">
                                            <Checkbox
                                                name="tipo_campismo"
                                                value="trilha"
                                                valueCurrent={
                                                    data.tipo_campismo
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Trilha
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="tipo_campismo"
                                                value="selvagem"
                                                valueCurrent={
                                                    data.tipo_campismo
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Selvagem
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="tipo_campismo"
                                                value="familiar"
                                                valueCurrent={
                                                    data.tipo_campismo
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Familiar
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="tipo_campismo"
                                                value="caravanista"
                                                valueCurrent={
                                                    data.tipo_campismo
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Caravanista
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="tipo_campismo"
                                                value="overlanding"
                                                valueCurrent={
                                                    data.tipo_campismo
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Overlanding
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Label forInput="equipamentos">
                                        Equipamentos
                                        <small>
                                            <br />
                                            (Especificar equipamento, marca,
                                            modelo, ano, ...)
                                        </small>
                                    </Label>

                                    <Input
                                        type="textarea"
                                        name="equipamentos"
                                        value={data.equipamentos}
                                        placeholder="Ex.: Barraca, trailer, motor home, camper, ..."
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-6">
                                    <Label
                                        forInput="primeira_vez"
                                        value="Ano que acampou pela primeira vez"
                                    />

                                    <Input
                                        type="number"
                                        step="1"
                                        name="primeira_vez"
                                        value={data.primeira_vez}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="block mt-4">
                                    <Label value="Levaria alguém para campar?" />

                                    <div className="my-4 grid grid-cols-2 gap-4">
                                        <label className="flex">
                                            <RadioBox
                                                name="levaria_alguem"
                                                value="nao"
                                                valueCurrent={
                                                    data.levaria_alguem
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Não
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="levaria_alguem"
                                                value="amigos"
                                                valueCurrent={
                                                    data.levaria_alguem
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Amigos
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="levaria_alguem"
                                                value="parentes"
                                                valueCurrent={
                                                    data.levaria_alguem
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Parentes
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="levaria_alguem"
                                                value="colegas_trabalho"
                                                valueCurrent={
                                                    data.levaria_alguem
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Colegas de trabalho
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="levaria_alguem"
                                                value="outros"
                                                valueCurrent={
                                                    data.levaria_alguem
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Outros
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Label
                                        forInput="quando_acampar"
                                        value="Quando pode acampar?"
                                    />

                                    <div className="my-4 grid grid-cols-2 gap-4 mt-4">
                                        <label className="flex">
                                            <Checkbox
                                                name="quando_acampar"
                                                value="sempre-qualquer-momento"
                                                valueCurrent={
                                                    data.quando_acampar
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Sempre/Qualquer momento
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="quando_acampar"
                                                value="finais-semana"
                                                valueCurrent={
                                                    data.quando_acampar
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Finais de semana e/ou feriados
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="quando_acampar"
                                                value="ferias"
                                                valueCurrent={
                                                    data.quando_acampar
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Férias
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="block mt-4">
                                    <Label value="Possuí casa de veraneio?" />

                                    <div className="my-4 grid grid-cols-2 gap-4">
                                        <label className="flex">
                                            <RadioBox
                                                name="casa_veraneio"
                                                value="nao"
                                                valueCurrent={
                                                    data.casa_veraneio
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Não
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="casa_veraneio"
                                                value="campo"
                                                valueCurrent={
                                                    data.casa_veraneio
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Casa de campo
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="casa_veraneio"
                                                value="praia"
                                                valueCurrent={
                                                    data.casa_veraneio
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Casa de praia
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <RadioBox
                                                name="casa_veraneio"
                                                value="parente_amigos"
                                                valueCurrent={
                                                    data.casa_veraneio
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Parente/Amigos
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Label
                                        forInput="destino_preferido"
                                        value="Destino preferido"
                                    />

                                    <div className="my-4 grid grid-cols-2 gap-4 mt-4">
                                        <label className="flex">
                                            <Checkbox
                                                name="destino_preferido"
                                                value="litoral"
                                                valueCurrent={
                                                    data.destino_preferido
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Litoral
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="destino_preferido"
                                                value="serra"
                                                valueCurrent={
                                                    data.destino_preferido
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Serra
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="destino_preferido"
                                                value="rural"
                                                valueCurrent={
                                                    data.destino_preferido
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Rural
                                            </span>
                                        </label>

                                        <label className="flex">
                                            <Checkbox
                                                name="destino_preferido"
                                                value="urbano"
                                                valueCurrent={
                                                    data.destino_preferido
                                                }
                                                handleChange={onHandleChange}
                                                required
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Urbano
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Label
                                        forInput="atrativos_prediletos"
                                        value="Atrativos prediletos"
                                    />

                                    <Input
                                        type="textarea"
                                        name="atrativos_prediletos"
                                        value={data.atrativos_prediletos}
                                        placeholder="Ex.: Mar, piscina, quadra esportiva, playground, monitoria para as crianças, ..."
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-6">
                                    <Label
                                        forInput="atrativos_obrigatorios"
                                        value="Atrativos obrigatórios"
                                    />

                                    <Input
                                        type="textarea"
                                        name="atrativos_obrigatorios"
                                        value={data.atrativos_obrigatorios}
                                        placeholder="Ex.: Banheiro, chuveiro quente, cozinha coletiva, ..."
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
