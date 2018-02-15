import React from 'react';
//import shallowEqual from 'react-pure-render/shallowEqual';
import Halogen from 'halogen';



export default function Spinner (props) {
	
 		var color = '#4DAF7C';

        var style = {
            display: '-webkit-flex',
            display: 'flex',
            WebkitFlex: '0 1 auto',
            flex: '0 1 auto',
            WebkitFlexDirection: 'column',
            flexDirection: 'column',
            WebkitFlexGrow: 1,
            flexGrow: 1,
            WebkitFlexShrink: 0,
            flexShrink: 0,
            WebkitFlexBasis: '25%',
            flexBasis: '25%',
            maxWidth: '100%',
            height: '200px',
            WebkitAlignItems: 'center',
            alignItems: 'center',
            WebkitJustifyContent: 'center',
            justifyContent: 'center'
        };


        return (
   			<div style={{
                boxSizing: 'border-box',
                display: '-webkit-flex',
                display: 'flex',
                WebkitFlex: '0 1 auto',
                flex: '0 1 auto',
                WebkitFlexDirection: 'row',
                flexDirection: 'row',
                WebkitFlexWrap: 'wrap',
                flexWrap: 'wrap'
            }}>
             <div style={style}><Halogen.MoonLoader color={color}/></div>
            {/*
                <div style={style}><Halogen.PulseLoader color={color}/></div>
                <div style={style}><Halogen.GridLoader color={color}/></div>
                <div style={style}><Halogen.ClipLoader color={color}/></div>
                <div style={style}><Halogen.RiseLoader color={color}/></div>
                <div style={style}><Halogen.BeatLoader color={color}/></div>
                <div style={style}><Halogen.SyncLoader color={color}/></div>
                <div style={style}><Halogen.RotateLoader color={color}/></div>
                <div style={style}><Halogen.FadeLoader color={color}/></div>
                <div style={style}><Halogen.PacmanLoader color={color}/></div>
                <div style={style}><Halogen.SquareLoader color={color}/></div>
                <div style={style}><Halogen.ScaleLoader color={color}/></div>
                <div style={style}><Halogen.SkewLoader color={color}/></div>
               
                <div style={style}><Halogen.RingLoader color={color}/></div>
                <div style={style}><Halogen.BounceLoader color={color}/></div>
                <div style={style}><Halogen.DotLoader color={color}/></div>
                */}

            </div>
            );

}