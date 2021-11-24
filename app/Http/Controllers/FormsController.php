<?php

namespace App\Http\Controllers;

use App\Models\Forms;
use App\Http\Requests\StoreFormsRequest;
use App\Http\Requests\UpdateFormsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FormsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $type = Str::remove('form/', $request->path());
        $component = Str::ucfirst(Str::camel($type));
        $form = Forms::where('type', $type)->where('user_id', $user->id)->first();

        return Inertia::render($component, ['type' => $type, 'fields' => $form?->fields]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFormsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFormsRequest $request)
    {
        $user = Auth::user();
        $type = $request->type;
        $fields = $request->fields;

        Forms::updateOrCreate([
            'user_id' => $user->id,
            'type' => $type,
        ], [
            'fields' => $fields
        ]);

        $component = Str::ucfirst(Str::camel($type));

        return Redirect::route($type);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Forms  $forms
     * @return \Illuminate\Http\Response
     */
    public function show(Forms $forms)
    {
        $fields = $forms->fields;
        $type = Str::ucfirst(Str::camel($forms->type));

        return Inertia::render($type, ['type' => $type, 'fields' => $fields]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Forms  $forms
     * @return \Illuminate\Http\Response
     */
    public function edit(Forms $forms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFormsRequest  $request
     * @param  \App\Models\Forms  $forms
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFormsRequest $request, Forms $forms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Forms  $forms
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forms $forms)
    {
        //
    }
}
