<?php

namespace App\Listeners;

use App\Events\sendOrderEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class sendOrderDetails
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  sendOrderEvent  $event
     * @return void
     */
    public function handle(sendOrderEvent $event)
    {
       return $event;
    }
}
