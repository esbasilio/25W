<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('tasks')->insert([
        	'code'			=> 'T1',
        	'description'	=> 'description of task 1',
        	'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
        	'code'			=> 'T2',
        	'description'	=> 'description of task 2',
        	'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T3',
            'description'   => 'description of task 3',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T4',
            'description'   => 'description of task 4',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T5',
            'description'   => 'description of task 5',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T6',
            'description'   => 'description of task 6',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T7',
            'description'   => 'description of task 7',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T8',
            'description'   => 'description of task 8',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

        \DB::table('tasks')->insert([
            'code'          => 'T9',
            'description'   => 'description of task 9',
            'date_of_task'  => date('Y-m-d H:i:s')
        ]);

    }
}
