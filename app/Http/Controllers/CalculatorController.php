<?php

namespace App\Http\Controllers;

use App\Models\Calculator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CalculatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'valueOne' => 'required',
            'valueTwo' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        DB::beginTransaction();
        try {

            $sum_data = (int)$request->valueOne + (int)$request->valueTwo;

            Calculator::create(['sum_data' => $sum_data]);
            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Sum Data successfully Added',
                'item' => $sum_data


            ], 201);
        } catch (\Exception $e) {
            return $e->getMessage();
        }


    }
}
