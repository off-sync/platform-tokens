package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	middleware "github.com/go-openapi/runtime/middleware"
)

// CreateTokenHandlerFunc turns a function with the right signature into a create token handler
type CreateTokenHandlerFunc func(CreateTokenParams) middleware.Responder

// Handle executing the request and returning a response
func (fn CreateTokenHandlerFunc) Handle(params CreateTokenParams) middleware.Responder {
	return fn(params)
}

// CreateTokenHandler interface for that can handle valid create token params
type CreateTokenHandler interface {
	Handle(CreateTokenParams) middleware.Responder
}

// NewCreateToken creates a new http.Handler for the create token operation
func NewCreateToken(ctx *middleware.Context, handler CreateTokenHandler) *CreateToken {
	return &CreateToken{Context: ctx, Handler: handler}
}

/*CreateToken swagger:route POST / createToken

CreateToken create token API

*/
type CreateToken struct {
	Context *middleware.Context
	Handler CreateTokenHandler
}

func (o *CreateToken) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, _ := o.Context.RouteInfo(r)
	var Params = NewCreateTokenParams()

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params) // actually handle the request

	o.Context.Respond(rw, r, route.Produces, route, res)

}
