import { Controller, Get, Req, Res, Session, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express'
import { GoogleAuthGuard } from './user.gaurd'

@Controller('google')
export class UsersController {
  constructor() {}

  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req: Request, @Res() res: Response){

  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>){ 
    // res.send("<script>window.close();</script>")
    res.redirect("http://localhost:5000/")
  }
}    

@Controller('user')
export class AuthCheckController{
  constructor() { }
  @Get()
    // @UseGuards(GoogleAuthGuard) 
    checkUser(@Req() req, @Res() res) {
      if(req.user) {
        // console.log(req.user)
        res.json(req.user)
      }
      else {
        res.send('unauthenticated')
      }
    }
  @Get('isAdmin') 
  checkAdmin(@Req() req, @Res() res) {
    if(req.user) {
      res.json(req.user.isAdmin)
    }
    else {
      res.send('unauthenticated')
    }
  }
  @Get('logout')
  logout(@Req() req, @Res() res) {
    req.logout()
    if(req.user) {
      res.send("fuck")
    }
    else {
      res.send("logout")
    }
  }
}