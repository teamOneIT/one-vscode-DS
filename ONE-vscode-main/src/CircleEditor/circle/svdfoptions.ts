// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ActivationFunctionType } from '../circle/activation-function-type';


export class SVDFOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SVDFOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSVDFOptions(bb:flatbuffers.ByteBuffer, obj?:SVDFOptions):SVDFOptions {
  return (obj || new SVDFOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSVDFOptions(bb:flatbuffers.ByteBuffer, obj?:SVDFOptions):SVDFOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SVDFOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

rank():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

fusedActivationFunction():ActivationFunctionType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
}

asymmetricQuantizeInputs():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startSVDFOptions(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addRank(builder:flatbuffers.Builder, rank:number) {
  builder.addFieldInt32(0, rank, 0);
}

static addFusedActivationFunction(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType) {
  builder.addFieldInt8(1, fusedActivationFunction, ActivationFunctionType.NONE);
}

static addAsymmetricQuantizeInputs(builder:flatbuffers.Builder, asymmetricQuantizeInputs:boolean) {
  builder.addFieldInt8(2, +asymmetricQuantizeInputs, +false);
}

static endSVDFOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSVDFOptions(builder:flatbuffers.Builder, rank:number, fusedActivationFunction:ActivationFunctionType, asymmetricQuantizeInputs:boolean):flatbuffers.Offset {
  SVDFOptions.startSVDFOptions(builder);
  SVDFOptions.addRank(builder, rank);
  SVDFOptions.addFusedActivationFunction(builder, fusedActivationFunction);
  SVDFOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
  return SVDFOptions.endSVDFOptions(builder);
}

unpack(): SVDFOptionsT {
  return new SVDFOptionsT(
    this.rank(),
    this.fusedActivationFunction(),
    this.asymmetricQuantizeInputs()
  );
}


unpackTo(_o: SVDFOptionsT): void {
  _o.rank = this.rank();
  _o.fusedActivationFunction = this.fusedActivationFunction();
  _o.asymmetricQuantizeInputs = this.asymmetricQuantizeInputs();
}
}

export class SVDFOptionsT {
constructor(
  public rank: number = 0,
  public fusedActivationFunction: ActivationFunctionType = ActivationFunctionType.NONE,
  public asymmetricQuantizeInputs: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SVDFOptions.createSVDFOptions(builder,
    this.rank,
    this.fusedActivationFunction,
    this.asymmetricQuantizeInputs
  );
}
}
